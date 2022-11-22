import clsx from "clsx";
import "./styles.sass";

const BaseButton = (props: {
  title?: string;
  padding?: string;
  fontSize?: string;
  icon?: React.ReactNode;
  isTransparent?: boolean;
  isRed?: boolean;
  isBlack?: boolean;
  disabled?: boolean;
  color?: string,
  modificator?: string;
  onClick: (event?: React.MouseEvent<HTMLDivElement>) => void;
}) => (
  <div
    className={clsx("base-button", {
      transparentButton: props.isTransparent,
      redButton: props.isRed,
      blackButton: props.isBlack,
      withIcon: Boolean(props.icon),
      disabled: props.disabled || false,
      [props.modificator as string]: props.modificator,
    })}
    onClick={props.onClick}
    style={{
      padding: props.padding,
      fontSize: props.fontSize,
      background: props.color,
      borderColor: props.color,
    }}
  >
    {props.title}
    {props.icon && <div className="base-button__icon icon">{props.icon}</div>}
  </div>
);

export default BaseButton;
