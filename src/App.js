import logo from './logo.svg';
import './App.css';
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
} from 'beautiful-skill-tree'
import grabTricks from './grabTricks.json'
import butterTricks from './butterTricks.json'
import flipTricks from './flipTricks.json'
import jibTricks from './jibTricks.json'
import spinTricks from './spinTricks.json'
import stallTricks from './stallTricks.json'

function App() {

    const allTricks = [
        {
            trickSet: grabTricks,
            title: "Grabs",
            treeId: "grabSkillTree",
            description: "Skill tree for grab tricks"
        },
        {
            trickSet: spinTricks,
            title: "Spins",
            treeId: "spinSkillTree",
            description: "Skill tree for spin tricks"
        },
        {
            trickSet: jibTricks,
            title: "Jibs",
            treeId: "jibSkillTree",
            description: "Skill tree for jib tricks"
        },
        {
            trickSet: butterTricks,
            title: "Butters",
            treeId: "butterSkillTree",
            description: "Skill tree for butter tricks"
        },
        {
            trickSet: stallTricks,
            title: "Stalls",
            treeId: "stallSkillTree",
            description: "Skill tree for stall tricks"
        },
        {
            trickSet: flipTricks,
            title: "Flips",
            treeId: "flipSkillTree",
            description: "Skill tree for flip tricks"
        }
    ]

    return (
        <div className="App">
            {allTricks.map((item, index) => {
                return  <SkillProvider key={index}>
                            <SkillTreeGroup>
                                {({ skillCount }) => (
                                    <SkillTree
                                        treeId={item.treeId}
                                        title={item.title}
                                        data={item.trickSet}
                                        collapsible
                                        description={item.description}
                                    />
                                )}
                            </SkillTreeGroup>
                        </SkillProvider>
            })}
        </div>
    );
}

export default App;
