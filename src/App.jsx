import { useContext, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { AdminFlagContext } from './components/providers/AdminFlagProvider';

function App() {
  // 管理者フラグ
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {/* 管理者かどうかで文字を出し分け */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card />
    </div>
  );
}

export default App;
