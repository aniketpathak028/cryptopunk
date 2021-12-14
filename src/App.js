import Header from './components/Header';
import './App.css'
import CollectionCard from './components/CollectionCard';

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name="Bandana Punk"
        traits={[{ value: 7 }]}
        img="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
      />
    </div>
  );
}

export default App;
