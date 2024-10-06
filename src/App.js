import logo from './logo.svg';
import './App.css';
import Headline from "./Headline";
import Lesson from "./Lesson";


const headline = ['Nr', 'Godzina', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];
const plan = [{nr: 1, godzina: '8:00 - 8:45', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c: '', pt: ''},
    {nr: 2, godzina: '8:50 - 9:35', p:'', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c: 'PAD 2/2 506', pt: ''},
    {nr: 3, godzina: '9:40 - 10:25', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c: 'PAD 2/2 506', pt: 'PAD 2/2 506'},
    {nr: 4, godzina: '10:45 - 11:30', p: '', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c: '', pt: 'PAD 2/2 506'},
    {nr: 5, godzina: '11:35 - 12:20', p: '', w: '', s: 'PAD 2/2 506', c: 'PAD 2/2 506', pt: 'PAD 2/2 506'},
    {nr: 6, godzina: '12:25 - 13:10', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c: '', pt: 'PAD 2/2 506'},
    {nr: 7, godzina: '13:15 - 14:00', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c: 'PAD 2/2 506', pt: ''},];

function App() {
  return (
    <div className="App">
      <h1>Plan Lekcji</h1>
        <Headline head={headline} />
        {plan.map((e) =>
        <Lesson key={e.nr} name={e} />)}
    </div>
  );
}

export default App;
