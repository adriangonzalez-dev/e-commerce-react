import {useContext} from 'react'
import ChartContext from '../context/chartProvider'


export const useCart = () => {
  return useContext(ChartContext)
}

