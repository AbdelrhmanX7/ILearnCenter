import { GenerateButtonStyleType } from './type'

export const generateButtonStyle = ({
  emphasis = 'high',
  variant = 'primary',
  danger = false,
}: GenerateButtonStyleType) => {
  switch (emphasis) {
    case 'medium':
      if (danger) return '!border-[#ff3f2d] text-[#ff3f2d]'
      switch (variant) {
        case 'primary':
          return 'border-[#1E232C] text-[#1E232C] !shadow-none'
        case 'secondary':
          return 'border-[#4ac7cf] text-[#4ac7cf]'
        case 'tertiary':
          return 'bg-white !shadow-none !border-none !text-[#111827]'
        default:
          ''
      }
    default:
      if (danger) return '!bg-[#ff3f2d] !border-[#ff3f2d]'
      switch (variant) {
        case 'primary':
          return 'bg-[#1E232C] border-[#d1d5db]'
        case 'secondary':
          return 'bg-[#4ac7cf] border-[#4ac7cf]'
        case 'tertiary':
          return 'bg-white border-[#d1d5db] !text-[#1E232C]'
        default:
          ''
      }
  }
}
