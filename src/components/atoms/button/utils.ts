import { GenerateButtonStyleType } from "./type";

export const generateButtonStyle = ({
  emphasis = "high",
  variant = "primary",
  danger = false,
}: GenerateButtonStyleType) => {
  switch (emphasis) {
    case "medium":
      if (danger) return "!border-[#ff3f2d] text-[#ff3f2d]";
      switch (variant) {
        case "primary":
          return "border-[#333333] text-[#333333]";
        case "secondary":
          return "border-[#22A7F0] text-[#22A7F0]";
        case "tertiary":
          return "bg-white border-[#d1d5db] !text-[#111827]";
        default:
          "";
      }
    default:
      if (danger) return "!bg-[#ff3f2d] !border-[#ff3f2d]";
      switch (variant) {
        case "primary":
          return "bg-[#333333] border-[#d1d5db]";
        case "secondary":
          return "bg-[#22A7F0] border-[#22A7F0]";
        case "tertiary":
          return "bg-white border-[#d1d5db] !text-[#111827]";
        default:
          "";
      }
  }
};
