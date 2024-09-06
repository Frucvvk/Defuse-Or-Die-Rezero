import { Link } from "react-router-dom";
import './ManualScreen.css'; // Make sure to import the CSS

function ManualScreen() {
    return (
        <div className="manual-screen">
            <Link to="/" className="back-button">
                <button>← Back</button>
            </Link>

            <div className="paper">
            <>Welcome to the Defuse or Die Game Manual! This game tests your skills in defusing bombs. Be careful, each decision counts 
    <br /><br />
    Instructions on defusing the bomb. You will see wires, buttons, and timers. Follow the correct sequence to defuse it.
    <br /><br />
    Time is critical. You must make decisions fast but carefully. One wrong cut could end the game! You have 3 time to wrong
    <br /><br />
    If you're unsure of what to do, use the manual. It contains detailed instructions for each bomb type.
    <br /><br />
    Good luck! Keep calm and defuse the bomb! </>,
    <><h2><strong>serial number</strong></h2>
    1. SN.55-81-32-23 
    <br />
    2. SN.44-21-23-4A  
    <br />
    3. SN.15-94-23-85  
    <br /> 
    4. SN.55-89-63-1B   
    <br />
    5. SN.00-12-59-10   
    <br />
    6. SN.98-63-12-9C  
    <br />
    7. SN.15-00-22-43  
    <br />
    8. SN.00-28-63-8A  
    <br />
    9. SN.15-00-00-13   
    <br />
    10. SN.98-00-12-9B   
    <br />
    11. SN.44-21-23-85   
    <br />
    12. SN.00-10-00-1C   
    <br />
    13. SN.98-63-23-43   
    <br />
    14. SN.11-10-00-4A   
    <br />
    15. SN.45-67-89-00  
    <br />
    16. SN.79-02-61-0B   
    <br />
    17. SN.15-94-32-01   
    <br />
    18. SN.00-12-12-0C  
    <br />
    19. SN.19-48-45-45   
    <br />
    20. SN.15-00-01-3A 
    <br />
  </><><strong>Code 1</strong>: 
<li>Press the Big Button once.</li>
<strong>Code 3</strong>:
<li>Pull out com_capacitor1.</li>
<strong>Code 4</strong>:
<li>Switch off Switch Button 2.</li>
<strong>Code 6</strong>:
<li>Pull out com_resistor2.</li>
<strong>Code 9</strong>:
<li>If PASS status has 3 green lights, press the Big Button once.if not press the Big button twice.</li>
<strong>Code 25</strong>:
<li>Pull out Fuse 2.</li>
<li>Press the Big Button once.</li>
<strong>Code 37</strong>:
<li>Cut the red wire.</li>
<li>Switch on Switch Button 1.</li>
<strong>Code 46</strong>:
<li>Pull out Battery 1.</li>
<li>If the Strike status has 1 red light, press the Big Button twice. If not, press the Big button forth.</li>
<strong>Code 59</strong>:
<li>Pull out com_transistor_brown.</li>
<li>Turn off Switch Button 2.</li>
</><><strong>Code 78:</strong>
<li>Enter "0106" on the Keypad.</li>
<li>Press the Big Button once.</li>
<strong>Code 93:</strong>
<li>If the Serial Number ends with "C", pull out com_transistor blue. If not, turn on Switch Button 1.</li>
<li>Press the Big Button once.</li>
<strong>Code 112:</strong>
<li>Pull out chip-main.</li>
<li>Press the Big Button once.</li>
<li>Cut the yellow wire.</li>
<strong>Code 200:</strong>
<li>If the Serial Number ends with "A", pull out com_capacitor2. If not Enter “19101” in keypad</li>
<li>Press the Big Button twice.</li>
<li>Switch off Switch Button 1.</li>
<strong>Code 375:</strong>
<li>Pull out Fuse 3.</li>
<li>Cut the blue wire.</li>
<li>Press the Big Button once.</li>
<strong>Code 692:</strong>
<li>Enter "2547" on the Keypad.</li>
<li>Pull out com_transistor_black.</li>
<li>Press the Big Button once.</li>
</><><strong>Code 823:</strong>
<li>If PASS status has 4 green lights, press the Big Button once. If not Enter ”8462” and press the Big button three times</li>
<li>Pull out chip-small.</li>
<li>Switch on Switch Button 1.</li>
<strong>Code 1124:</strong>
<li>Pull out Battery 2.</li>
<li>Cut the pink wire.</li>
<li>Press the Big Button twice.</li>
<li>Turn off Switch Button 2.</li>
<strong>Code 3333:</strong>
<li>If the Serial Number starts with "B", pull out Fuse 1.If not, turn off Switch Button 1 and Enter "5322" on the Keypad.</li>
<li>Cut the green wire.</li>
<li>Enter "2235" on the Keypad.</li>
<li>Press the Big Button once.</li>
<strong>Code 5423:</strong>
<li>Pull out com_capacitor3.</li>
<li>Switch on Switch Button 1.</li>
<li>Cut the yellow wire.</li>
<li>Press the Big Button once.</li>
<strong>Code 6584:</strong>
<li>Enter "2580" on the Keypad.</li>
<li>Pull out chip-big.</li>
<li>Turn off Switch Button 1.</li>
<li>Press the Big Button twice.</li>
</><>
<strong>Code 8796:</strong>
<li>Pull out com_resistor1.</li>
<li>Press the Big Button three times.</li>
<li>Cut the red wire.</li>
<li>Switch off Switch Button 2.</li>
</>
            </div>
        </div>
    );
}

export default ManualScreen;
