import { useQuery } from 'react-query'

import { getCurrencyList } from './api/currency';
import AppWrapper from './components/Wrappers/AppWrapper';
import Header from './components/Header/Header';
import Content from './components/Wrappers/Content';
import Currencies from './components/Currencies/Currencies';

// rename components
// add missing types


function App() {
	const { isLoading, isError, data, error } = useQuery('currencyList', getCurrencyList);
	console.log('data', data);
	
	if (isLoading) {
		return <span>Loading...</span>
	}

  return (
    <AppWrapper>
			<Header />
			<Content>
				<Currencies currencies={data.currencies}/>
			</Content>
    </AppWrapper>
  );
}

export default App;


