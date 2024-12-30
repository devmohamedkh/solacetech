import { Box, Container } from '@mui/material'
import BasicInfoSection from './BasicInfoSection'
import Header from './Header'
import PersonalInformationTab from './PersonalInformationTab'
import FinancialInformationTab from './FinancialInformationTab'
import { JSX, useState } from 'react'
import Sidebar from '../../components/SideBar'


function Home() {

  const [activeTab, setActiveTab] = useState(1)

  const curTab: Record<number, JSX.Element> = {
    1: <PersonalInformationTab />,
    2: <FinancialInformationTab />
  }
  return (
    <Container maxWidth="xl" style={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ padding: "20px", pl: '80px' }}>

        <Header />
        <Box sx={{ display: 'flex', gap: '24px', flexDirection: { xs: 'column', md: 'row' } }}>
          <BasicInfoSection activeTab={activeTab} setActiveTab={setActiveTab} />
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {curTab[activeTab]}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Home