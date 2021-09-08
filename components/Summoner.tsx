import eth from "@state/eth"; // Network state
import styles from "@styles/components/Summoner.module.scss"; // Layout styles
import summoner from "@state/summoner"
import { FormEvent, ReactElement, useState } from "react";
import { BigNumber } from "@ethersproject/bignumber";


export default function Summoner(): ReactElement {

    const { provider, address, unlock } = eth.useContainer();
    
    //Local Provider
    const [buttonLoading, setButtonLoading] = useState<boolean>(false); // Button loading
    const [load, setLoaded] = useState<boolean>(false);
    const[id, setId] = useState<string>("");
    const[_class, setClass] = useState<string>("");
    const[_level, setLevel] = useState<string>("");
    const { loadSummoner, getClass } = summoner.useContainer();

    function convertClass(num : BigNumber) {
        console.log(num.toString())
        return num.toString();
    }
    
    const handleSubmit = async ( e : FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const target = e.target as typeof e.target & {
            name : { value : string}
        };
        loadSummoner(target.name.value).then((s) => {
            const currSummoner = s as typeof s & {
                _xp : BigNumber,
                _class : BigNumber,
                _level : BigNumber,
                _log : BigNumber
            };
            console.log(currSummoner);
            getClass(currSummoner["_class"].toString()).then((s) => {
                const className = s as string;
                if(s !== "") {
                    setClass(className);
                }
            });
            setId(target.name.value);
        });
    }

    return (
        <div className= {styles.summoner}>
            <h3>
                Summon me daddy
            </h3>
            {/* Button states */}
      {
        !address ? 
            <button onClick={() => unlock()}>Authenticate</button>
        : !load ? 
            <form onSubmit={handleSubmit} >
                <label>Enter Summoner ID ():</label>
                <input id="name"></input>
                <button >Load Summoner</button>
            </form>
            :
            <h1>{id}</h1>
      }
        </div>
    );
}
