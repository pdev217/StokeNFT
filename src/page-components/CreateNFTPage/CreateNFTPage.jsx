import { useState, useEffect } from "react";
//classnames
import cn from "classnames";
//next
import Image from "next/image";
import { useRouter } from "next/router";
//axios
import axios from "axios";
//redux
import { useDispatch } from "react-redux";
import { open as openError } from "../../redux/slices/errorSnackbarSlice";
//mui
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
//components
import { CustSwitch } from "../../components/CustSwitch/CustSwitch";
import { CustButton } from "../../components/CustButton/CustButton";
import { AddStatsOrLevelsModal } from "../../modals/AddToNFTModal/AddStatsOrLevelsModal";
import { Stat } from "../../components/Stat/Stat";
import { Level } from "../../components/Level/Level";
import { Property } from "../../components/Property/Property";
import { AddPropertiesModal } from "../../modals/AddToNFTModal/AddPropertiesModal";
//utils
import { useStyles, textFields, selects, uploadAndSwitchFields } from "./CreateNFTPage.utils";
//styles
import styles from "./CreateNFTPage.module.css";
//web3
import { useWeb3React } from "@web3-react/core";
//ethers
import { ethers } from "ethers";
//hooks
import useAuth from "../../hooks/useAuth";
//artifacts
import stokeArtifacts from "../../../artifacts/contracts/StokeNFT.sol/StokeNFT.json"
//untils
import { toHex } from "../../utils/index"
import { TypedDataUtils } from 'ethers-eip712'

var contractAddress;
export const CreateNFTPage = () => {
  const { active, library, chainId } = useWeb3React();
  const dispatch = useDispatch();
  const { account, error } = useAuth();
  const etherContractAddr = "0x120Da6F582EbE1c97E0dA50A14b5017C34370598"
  const polygonContractAddr = "0xdA054F032E40F04c9E564701B70631ebC8Ba4877"
  const etherChainId = 3; //Ropsten testnet chainId
  const polChainId = 80001; //mumbai testnet chainId
  let attributes = [];
  const router = useRouter();

  if (error) {
    dispatch(openError(`${error.message}`));
  }

  const [values, setValues] = useState({
    file: undefined,
    name: "",
    externalLink: "",
    description: "",
    collection: "none",
    properties: [],
    levels: [],
    stats: [],
    unlockable: "",
    isSensitiveContent: false,
    supply: "none",
    blockchainType: "none",
    freezeMetadata: "none",
    isAssetBacked: false,
  });

  const [previewFile, setPreviewFile] = useState();
  const [disabledButton, setDisabledButton] = useState(true);
  const [enabledUnlockable, setEnsabledUnlockable] = useState(true);
  const [isAddStatsOpened, setIsAddStatsOpened] = useState(false);
  const [isAddLevelsOpened, setIsAddLevelsOpened] = useState(false);
  const [isAddPropertiesOpened, setIsAddPropertiesOpened] = useState(false);
  const [collections, setCollections] = useState([]);

  const muiClasses = useStyles();

  //handle functions

  const handleChange = (e, value, type) => {
    e.preventDefault();
    switch (type) {
      case "string":
        setValues({ ...values, [value]: e.target.value });
        break;
      case "file":
        if (!e.target.files || e.target.files.length === 0) {
          setValues({ ...values, file: undefined });
          return;
        }

        const file = e.target.files[0];
        const link = e.target.value;

        if (file.size < 100000000) {
          setValues({ ...values, file: file });
        } else {
          dispatch(openError(`The uploaded file must be smaller than 100 mb`));
        }
        break;
      case "boolean":
        if (value === "unlockable") {
          setEnsabledUnlockable(e.target.checked);
        } else if (value === "isSensitiveContent") {
          setValues({ ...values, [value]: e.target.checked });
        }
        break;
    }
  };

  const handleOpenPopup = (type) => {
    switch (type) {
      case "stats":
        setIsAddStatsOpened(true);
        break;
      case "levels":
        setIsAddLevelsOpened(true);
        break;
      case "properties":
        setIsAddPropertiesOpened(true);
        break;
    }
  };

  const pinFileToIPFS = async (file) => {
    let data = new FormData();
    data.append('file', file);

    const responsive = await axios
      .post(`https://api.pinata.cloud/pinning/pinFileToIPFS`, data, {
          maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
          headers: {
              pinata_api_key: process.env.PINATA_API_KEY,
              pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY
          }
      })
    return responsive.data.IpfsHash
  }

  const pinJSONToIPFS = async (JSONBody) => {
    const responsive = await axios
        .post(`https://api.pinata.cloud/pinning/pinJSONToIPFS`, JSONBody, {
          headers: {
            pinata_api_key: process.env.PINATA_API_KEY,
            pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY
          }
      })
    return responsive.data.IpfsHash;
  }

  const handleSave = async () => {
    console.log(values)
    console.log(library)
    if(!library) {
      router.push("/connect-wallet")
    }else {
      const imageHash = await pinFileToIPFS(values.file);
  
      setAttribute(values.properties, "property")
      setAttribute(values.levels, "other")
      setAttribute(values.stats, "other")
  
      const metaData = {
        name: values.name,
        image: `https://ipfs.io/ipfs/${imageHash}`,
      }
  
      if(values.description) {
        metaData.description = values.description
      }
      if(values.externalLink) {
        metaData.externalLink = values.externalLink
      }
      if(values.unlockable) {
        metaData.unlockable = values.unlockable
      }
      if(attributes.length !== 0) {
        metaData.attributes = attributes
      }
  
      const metaDataHash = await pinJSONToIPFS(metaData)
      const tokenURI = `https://ipfs.io/ipfs/${metaDataHash}`
      console.log(metaData)
  
      if(values.blockchainType === "Ethereum") {
        contractAddress = etherContractAddr
        console.log("ethereum")
        if(chainId !== 3 ) {
          await switchNetwork(etherChainId).then(() => {
            console.log('network changed to Ropsten testnet')
          }).catch((err) => {
            dispatch(openError(err.message))
          })
        }
      }else if(values.blockchainType === "Polygon") {
        contractAddress = polygonContractAddr
        console.log("polygon")
        if(chainId !== 80001 ) {
          await switchNetwork(polChainId).then(() => {
            console.log('network changed to Mumbai testnet')
          }).catch((err) => {
            dispatch(openError(err.message))
          })
        }
      }
      createToken(tokenURI)
    }
  };

  const createToken = async (tokenURI) => {
    const signer = library.getSigner(account);
    const IStoke = new ethers.Contract(contractAddress, stokeArtifacts.abi, signer);
    const stokeContract = IStoke.attach(contractAddress)
    console.log(stokeContract)
    const voucher = { 
      tokenId: 20,
      uri: tokenURI,
      minPrice: 0
     }
    // const transaction = await stokeContract.createToken(tokenURI)
    // .then(res => console.log(res))
    // .catch(err => {
    //   dispatch(openError(err.message));
    // })
    // transaction.wait().then(res => console.log(res))
  }

  const setAttribute = (data, type) => {
    switch (type) {
      case "property":
        data?.map((d) => {
          const newData = { 
            "trait_type": d.type,
            "value": d.name,
          }
          attributes.push(newData)
        })
        break;
      
      case "other":
        data?.map((d) => {
          const newData = { 
            "trait_type": d.name,
            "value": d.nftValue,
          }
          attributes.push(newData)
        })
        break;
    
      default:
        break;
    }
  }

  const switchNetwork = async (network) => {
    await library.provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: toHex(network) }]
    });
  }

  const fetchCollections = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const { data } = await axios.get(`${process.env.BACKEND_URL}/collections`, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      setCollections([...data]);
    } catch (e) {
      dispatch(
        openError(e.response.data ? `${e.response.data.statusCode} ${e.response.data.message}` : e.message)
      );
    }
  };

  // useEffects

  useEffect(() => {
    fetchCollections();
  }, []);

  useEffect(() => {
    if (values.file && values.name) {
      console.log("23456789")
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [values.file, values.name]);

  useEffect(() => {
    if (!values.file) {
      setPreviewFile(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(values.file);
    console.log("---objectUrl", objectUrl);
    setPreviewFile(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [values.file]);

  const star = <span className={styles.star}>*</span>;
  
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainTitle}>
          <span>Create New Item</span>
        </div>
        <div className={styles.uploadItemSection}>
          <div className={styles.title}>
            <span>Image, Video, Audio, or 3D Model {star}</span>
          </div>
          <div className={styles.description}>
            <span>
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
            </span>
          </div>
          <div className={styles.dragPlaceholder}>
            <div className={styles.imageWrapper}>
              {previewFile && values.file?.type.startsWith("image") && (
                <Image src={previewFile} alt="image" layout="fill" objectFit="contain" />
              )}
            </div>
            <input
              className={styles.uploadFileInput}
              type="file"
              onChange={(e) => handleChange(e, "file", "file")}
              accept=".png, .jpg, .gif, .svg, .mp4, .webm, .mp3, .wav, .ogg, .glb, .gltf"
            />
            {previewFile && values.file?.type.startsWith("video") && (
              <video src={previewFile} controls="controls" autoPlay="true" className={styles.video} />
            )}
            {previewFile && values.file?.type.startsWith("audio") && (
              <audio src={previewFile} controls="controls" autoPlay="true" className={styles.audio} />
            )}
          </div>
        </div>
        {textFields.map(({ title, description, required, label, multiline, id, maxLength }) => (
          <div key={id} className={styles.section}>
            <div
              className={cn(styles.title, {
                [styles.name]: title === "Name",
              })}
            >
              <span>
                {title} {required && star}
              </span>
            </div>
            {description && (
              <div className={styles.description}>
                <span>{description}</span>
              </div>
            )}
            <TextField
              fullWidth
              id={label}
              label={label}
              variant="outlined"
              className={muiClasses.textField}
              value={values[id]}
              onChange={(e) => handleChange(e, id, "string")}
              InputLabelProps={{
                style: { color: "#FFFFFF4D" },
              }}
              InputProps={{ style: { color: "white" } }}
              multiline={multiline}
              inputProps={{
                maxLength: maxLength || 524288,
              }}
              minRows={multiline && 3}
              maxRows={multiline && 10}
            />
          </div>
        ))}
        <div className={styles.section}>
          <div className={styles.title}>
            <span>
              {selects[0].title} {star}
            </span>
          </div>
          <div className={styles.description}>
            <span>{selects[0].description}</span>
          </div>
          <Select
            fullWidth
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            style={{
              color: "white",
            }}
            onChange={(e) => handleChange(e, "collection", "string")}
            value={values.collection}
            className={muiClasses.select}
          >
            <MenuItem disabled value="none">
              <span style={{ color: "rgb(77, 77, 77)" }}>{selects[0].placeholder}</span>
            </MenuItem>
            {collections.map(({ id, text }) => (
              <MenuItem key={id} value={text}>
                <span>{text}</span>
              </MenuItem>
            ))}
          </Select>
        </div>
        {uploadAndSwitchFields.map(({ title, description, icon, type, id, defaultChecked }) => (
          <div key={id} className={styles.underlinedSection}>
            <div>
              <div className={styles.fieldIcon}>
                <Image src={icon} layout="fill" alt={title} />
              </div>
              <div className={styles.fieldsTitleDescriptionWrapper}>
                <div className={styles.boldTitle}>
                  <span>{title}</span>
                </div>
                <div className={styles.description}>
                  <span>{description}</span>
                </div>
              </div>
              {type === "add" ? (
                <div className={styles.plus} onClick={() => handleOpenPopup(id)}>
                  <span>+</span>
                </div>
              ) : (
                <CustSwitch
                  className={styles.switch}
                  defaultChecked={defaultChecked}
                  onChange={(e) => handleChange(e, id, "boolean")}
                />
              )}
            </div>
            {title === "Unlockable Content" && (
              <div
                className={cn(styles.unlockable, {
                  [styles.unlockableDisplayed]: enabledUnlockable,
                  [styles.unlockableAbsent]: !enabledUnlockable,
                })}
              >
                <div
                  className={cn(styles.title, {
                    [styles.name]: title === "Name",
                  })}
                ></div>
                <TextField
                  fullWidth
                  id="Unlockable"
                  label="Provide a detail description of your item"
                  variant="outlined"
                  className={muiClasses.textField}
                  value={values.unlockable}
                  onChange={(e) => handleChange(e, "unlockable", "string")}
                  InputLabelProps={{
                    style: { color: "#FFFFFF4D" },
                  }}
                  InputProps={{ style: { color: "white" } }}
                  multiline
                  minRows={3}
                  maxRows={10}
                />
              </div>
            )}
            {id === "stats" &&
              values.stats.map(({ name, nftValue, maxValue, id }) => (
                <Stat key={id} name={name} nftValue={nftValue} maxValue={maxValue} />
              ))}
            {id === "levels" &&
              values.levels.map(({ name, nftValue, maxValue, id }) => (
                <Level key={id} name={name} nftValue={nftValue} maxValue={maxValue} />
              ))}
            {id === "properties" && (
              <div className={styles.propertiesWrapper}>
                {values.properties.map(({ name, type, id }) => (
                  <Property key={id} name={name} type={type} />
                ))}
              </div>
            )}
          </div>
        ))}
        {selects.slice(1).map(({ title, description, options, placeholder, required, id }) => (
          <div
            className={cn(styles.section, {
              [styles.sectionWithMarginTop]: title === "Blockchain", //"Supply",
              [styles.sectionWithBigMarginBottom]: title === "Blockchain", //"Freeze Metadata",
            })}
            key={id}
          >
            <div className={styles.title}>
              <span>
                {title} {required && star}
              </span>
            </div>
            <div className={styles.description}>
              <span>{description}</span>
            </div>
            <Select
              fullWidth
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              style={{
                color: "white",
              }}
              onChange={(e) => handleChange(e, id, "string")}
              value={values[id]}
              className={muiClasses.select}
            >
              <MenuItem disabled value="none">
                <span style={{ color: "rgb(77, 77, 77)" }}>{placeholder}</span>
              </MenuItem>
              {options.map(({ id, text }) => (
                <MenuItem key={id} value={text}>
                  <span>{text}</span>
                </MenuItem>
              ))}
            </Select>
          </div>
        ))}
        <CustButton
          color="primary"
          text="Save"
          onClick={handleSave}
          className={styles.button}
          disabled={ disabledButton }
        />
        <AddStatsOrLevelsModal
          title="Add Stats"
          description="Stats show up underneath your item, are clickable, and can be filtered in your collection’s sidebar."
          isModalOpened={isAddStatsOpened}
          setIsModalOpened={setIsAddStatsOpened}
          data={values}
          setData={setValues}
        />
        <AddStatsOrLevelsModal
          title="Add Levels"
          description="Levels show up underneath your item, are clickable, and can be filtered in your collection's sidebar."
          isModalOpened={isAddLevelsOpened}
          setIsModalOpened={setIsAddLevelsOpened}
          data={values}
          setData={setValues}
        />
        <AddPropertiesModal
          isModalOpened={isAddPropertiesOpened}
          setIsModalOpened={setIsAddPropertiesOpened}
          data={values}
          setData={setValues}
        />
      </div>
    </div>
  );
};
