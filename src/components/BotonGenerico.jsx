import { Button  } from '@mui/material'

const BotonGenerico = ({ variante, nombre, tamaño, color, callback }) => {
  return (
    <Button 
      variant={variante}
      size={tamaño}
      color={color}
      endIcon={<Icono />}
      onClick={callback}
    >
      {nombre}
    </Button>
  )
}

export default BotonGenerico;


