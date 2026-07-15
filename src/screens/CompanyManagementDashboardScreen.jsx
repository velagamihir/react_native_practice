import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CompanyManagementDashboardScreen() {
  //useState custom hooks
  //Services of the company
  const [services, setServices] = useState(['UI/UX', 'JS', 'App Dev']);
  //Number of Employees (default value 20)
  const [employeeCount, setEmployeeCount] = useState(20);
  //Methods
  //Method to add a new service
  const handleServicesChange = newService => {
    setServices([...services, newService]);
  };
  //Function to fire an employee and decrease the employee count by 1
  const handleFireEmployee = () => {
    setEmployeeCount(prev => prev - 1);
  };
  //Function to hire and employee and increase the employee count by 1.
  const handleHireEmployee = () => {
    setEmployeeCount(prev => prev + 1);
  };
  //Company details
  const companyDetails = {
    dashboardTitle: 'React Native',
    companyName: 'Velaforge tech',
  };
  return (
    <SafeAreaView>
      <CompanyHeaderComponent companyDetails={companyDetails} />
      <ServicesComponent
        services={services}
        handleServicesChange={handleServicesChange}
      />
      <EmployeeManagementComponent
        employeeCount={employeeCount}
        hireEmployee={handleHireEmployee}
        fireEmployee={handleFireEmployee}
      />
    </SafeAreaView>
  );
}
//Presentation Component to display the details of the company
const CompanyHeaderComponent = ({ companyDetails }) => {
  return (
    <View>
      <Text>Dashboard Title: {companyDetails.dashboardTitle}</Text>
      <Text>Company Name: {companyDetails.companyName}</Text>
    </View>
  );
};
//Function component to display and add a new service
const ServicesComponent = ({ services, handleServicesChange }) => {
  const [count, setCount] = useState(0);
  const handleAddService = () => {
    handleServicesChange(`Function ${count}`);
    setCount(prev => prev + 1);
  };
  return (
    <View>
      {services.map(service => (
        <View key={service}>
          <Text>{service}</Text>
        </View>
      ))}
      <Button onPress={handleAddService} title="Add Service" />
    </View>
  );
};
//Functional Component to manage employees
const EmployeeManagementComponent = ({
  employeeCount,
  hireEmployee,
  fireEmployee,
}) => {
  return (
    <View>
      <Text>No of Employees: {employeeCount}</Text>
      <Button onPress={hireEmployee} title="Hire Employee" />
      <Button onPress={fireEmployee} title="Fire Employee" />
    </View>
  );
};
