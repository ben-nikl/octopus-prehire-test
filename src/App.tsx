import { useQuery } from 'react-query'

import { getCurrencyList } from './api/currency';
import AppWrapper from './components/Wrappers/AppWrapper';
import Header from './components/Header/Header';
import Content from './components/Wrappers/Content';
import Currencies from './components/Currencies/Currencies';

function App() {
	const { isLoading, data } = useQuery('currencyList', getCurrencyList);
	
	if (isLoading) {
		return <span>Loading...</span>
	}

  return (
    <AppWrapper>
			<Header />
			<Content>
				{data && <Currencies currencies={data.currencies} currenciesMap={data.currenciesMap}/>}
			</Content>
    </AppWrapper>
  );
}

export default App;


