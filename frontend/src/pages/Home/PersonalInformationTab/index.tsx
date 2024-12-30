import BasicInfoCard from './BasicInfoCard'
import ContactInformationCard from './ContactInformationCard'
import EmergencyContactsCard from './EmergencyContactsCard'
import AddressDetailsCard from './AddressDetailsCard'
import DrivingLicenseDetailsCard from './DrivingLicenseDetailsCard'
import MilitaryStatusCard from './MilitaryStatusCard'


function PersonalInformationTab() {
    return (
        <>
            <BasicInfoCard />
            <ContactInformationCard />
            <EmergencyContactsCard />
            <AddressDetailsCard />
            <DrivingLicenseDetailsCard />
            <MilitaryStatusCard />
        </>
    )
}

export default PersonalInformationTab