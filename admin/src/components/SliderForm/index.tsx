import { Col, Row, Slider } from "antd";
import { SliderBaseProps } from "antd/lib/slider"; // SliderMarks
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./styles.sass";

interface ISliderProps extends SliderBaseProps {
  label: string;
  defaultValue?: number;
  value?: number;
  description?: string;
  sliderCol?: number;
  labelCol?: number;
  maxWidth?: number;
  tooltipVisible?: boolean;
  gutter?: number | [number, number];
  onChange: (value: number) => void;
}

const SliderForm = ({
  label,
  value,
  defaultValue,
  description,
  step,
  max,
  min,
  marks,
  maxWidth,
  tooltipVisible,
  sliderCol,
  labelCol,
  gutter,
  onChange,
}: ISliderProps) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className="slider">
      <Row
        style={{
          width: "100%",
        }}
        gutter={gutter || 0}
      >
        <Col
          md={labelCol || (label ? 12 : 0)}
          xs={24}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="slider-label">{label}</span>
        </Col>
        <Col md={sliderCol || (label ? 12 : 24)} xs={24}>
          <div
            className="slider-component"
            style={{
              maxWidth,
            }}
          >
            <Slider
              value={value}
              defaultValue={defaultValue}
              onChange={onChange}
              marks={marks}
              step={step}
              max={max}
              min={min}
              tooltip={{ formatter: tooltipVisible ? (value) => value : null }}
            />
          </div>
        </Col>
      </Row>
      {description && (
        <Row>
          <Col
            offset={(!isMobile ? labelCol : 0) || (label && !isMobile ? 12 : 0)}
            md={sliderCol || (label ? 12 : 24)}
          >
            <p
              style={{
                maxWidth,
              }}
              className="slider-description"
            >
              {description}
            </p>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default SliderForm;
