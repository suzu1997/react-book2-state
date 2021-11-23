import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {
  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {/* 管理者かどうかで文字を出し分け */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
}

export default App;
