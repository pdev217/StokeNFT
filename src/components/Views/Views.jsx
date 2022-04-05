import { numberWithSymbol } from "../../helpers/numberWithSymbol";

export const Views = ({ quantity, className }) => (
  <p className={className}>IC {numberWithSymbol(quantity, ",")} Today</p>
);
