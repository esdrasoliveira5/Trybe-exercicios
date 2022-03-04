const convert = (value: number, baseUnity: string, conversionUnity: string ) :string => {
  
  switch (conversionUnity) {
    case 'Quilômetro':
      const convertedValueQ:number = value * 1000
      return `${convertedValueQ}m`

    case 'Hectômetro':
      const convertedValueH:number = value * 100
      return `${convertedValueH}m`

    case 'Decâmetro':
      const convertedValueD:number = value * 10
      return `${convertedValueD}m`

    case 'Metro':
      const convertedValueM:number = value * 1
      return `${convertedValueM}m`
    case 'Decímetro':
      const convertedValueDe:number = value * 0.1
      return `${convertedValueDe}m`

    case 'Centímetro':
      const convertedValueCe:number = value * 0.01
      return `${convertedValueCe}m`

    case 'Milímetro':
      const convertedValueMi:number = value * 0.001
      return `${convertedValueMi}m`

    default:
      break;
  }
}