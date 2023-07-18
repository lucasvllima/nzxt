import { Container } from './styles'

import { useMonitoring } from 'hooks/useMonitoring'

import { FiCpu as CpuIcon } from 'react-icons/fi'
import { BsGpuCard as GpuIcon } from 'react-icons/bs'
import { FaTemperatureLow as TempIcon } from 'react-icons/fa'
import { VscPulse as LoadIcon } from 'react-icons/vsc'


export const DualMonitor = () => {
  const { cpu, gpu } = useMonitoring()

  const Cpu = () => (
    <div className="info-container">
      <div className="info-title">
        <CpuIcon size={30} />
        <span className="info-label">{cpu?.name?.replace(/core/gi, '')}</span>
      </div>
      <div className="info-data">
        <div className="info-icon">
          <TempIcon className="icon-color" size={32} />
        </div>
        <div className="data">{cpu?.tempeture}°</div>
      </div>
      <div className="info-data">
        <div className="info-icon">
          <LoadIcon className="icon-color" size={32} />
        </div>
        <div className="data">
          {cpu?.load}
          <span>%</span>
        </div>
      </div>
    </div>
  )

  const Gpu = () => (
    <div className="info-container">
      <div className="info-title">
        <GpuIcon size={30} />
        <span className="info-label">{gpu?.name?.replace(/nvidia geforce/gi, '')}</span>
      </div>
      <div className="info-data">
        <div className="info-icon">
          <TempIcon className="icon-color" size={32} />
        </div>
        <div className="data">{gpu?.tempeture}°</div>
      </div>
      <div className="info-data">
        <div className="info-icon">
          <LoadIcon className="icon-color" size={32} />
        </div>
        <div className="data">
          {gpu?.load}
          <span>%</span>
        </div>
      </div>
    </div>
  )

  return (
    <Container>
        <div className="monitoring">
          <Cpu />
          <div className="info-separator"></div>
          <Gpu />
        </div>
    </Container>
  )
}
