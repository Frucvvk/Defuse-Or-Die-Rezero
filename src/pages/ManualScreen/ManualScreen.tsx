import { Link } from "react-router-dom";
import './ManualScreen.css'; // Make sure to import the CSS

function ManualScreen() {
    return (
        <div className="manual-screen">
            <Link to="/" className="back-button">
                <button>← Back</button>
            </Link>

            <div className="paper">
                <h1>Manual</h1>
                <p>Welcome to the manual. This manual will save your</p>

                {/* Serial Numbers Section */}
                <h2>Serial Numbers</h2>
                <ol className="serial-number-list"></ol>
                    <li>SN.55-81-32-23</li>
                    <li>SN.44-21-23-4A</li>
                    <li>SN.15-94-23-85</li>
                    <li>SN.55-89-63-1B</li>
                    <li>SN.00-12-59-10</li>
                    <li>SN.98-63-12-9C</li>
                    <li>SN.15-00-22-43</li>
                    <li>SN.00-28-63-8A</li>
                    <li>SN.15-00-00-13</li>
                    <li>SN.98-00-12-9B</li>
                    <li>SN.44-21-23-85</li>
                    <li>SN.00-10-00-1C</li>
                    <li>SN.98-63-23-43</li>
                    <li>SN.11-10-00-4A</li>
                    <li>SN.45-67-89-00</li>
                    <li>SN.79-02-61-0B</li>
                    <li>SN.15-94-32-01</li>
                    <li>SN.00-12-12-0C</li>
                    <li>SN.19-48-45-45</li>
                    <li>SN.15-00-01-3A</li>

                {/* Codes Section */}
                <h2>Codes</h2>
                <ul>
                    <strong>Code 1:</strong>
                    <li>Press the Big Button once.</li>
                    <li><strong>Code 3:</strong> Pull out com_capacitor1.</li>
                    <li><strong>Code 4:</strong> Switch off Switch Button 2.</li>
                    <li><strong>Code 6:</strong> Pull out com_resistor2.</li>
                    <li><strong>Code 9:</strong> If PASS status has 3 green lights, press the Big Button once. If not, press the Big Button twice.</li>
                    <li><strong>Code 25:</strong> Pull out Fuse 2. Press the Big Button once.</li>
                    <li><strong>Code 37:</strong> Cut the red wire. Switch on Switch Button 1.</li>
                    <li><strong>Code 46:</strong> Pull out Battery 1. If the Strike status has 1 red light, press the Big Button twice. If not, press the Big Button four times.</li>
                    <li><strong>Code 59:</strong> Pull out com_transistor_brown. Turn off Switch Button 2.</li>
                    <li><strong>Code 78:</strong> Enter "0106" on the Keypad. Press the Big Button once.</li>
                    <li><strong>Code 93:</strong> If the Serial Number ends with "C", pull out com_transistor_blue. If not, turn on Switch Button 1. Press the Big Button once.</li>
                    <li><strong>Code 112:</strong> Pull out chip-main. Press the Big Button once. Cut the yellow wire.</li>
                    <li><strong>Code 200:</strong> If the Serial Number ends with "A", pull out com_capacitor2. If not, enter “19101” on the keypad. Press the Big Button twice. Switch off Switch Button 1.</li>
                    <li><strong>Code 375:</strong> Pull out Fuse 3. Cut the blue wire. Press the Big Button once.</li>
                    <li><strong>Code 692:</strong> Enter "2547" on the Keypad. Pull out com_transistor_black. Press the Big Button once.</li>
                    <li><strong>Code 823:</strong> If PASS status has 4 green lights, press the Big Button once. If not, enter "8462" and press the Big Button three times. Pull out chip-small. Switch on Switch Button 1.</li>
                    <li><strong>Code 1124:</strong> Pull out Battery 2. Cut the pink wire. Press the Big Button twice. Turn off Switch Button 2.</li>
                    <li><strong>Code 3333:</strong> If the Serial Number starts with "B", pull out Fuse 1. If not, turn off Switch Button 1 and enter "5322" on the Keypad. Cut the green wire. Enter "2235" on the Keypad. Press the Big Button once.</li>
                    <li><strong>Code 5423:</strong> Pull out com_capacitor3. Switch on Switch Button 1. Cut the yellow wire. Press the Big Button once.</li>
                    <li><strong>Code 6584:</strong> Enter "2580" on the Keypad. Pull out chip-big. Turn off Switch Button 1. Press the Big Button twice.</li>
                    <li><strong>Code 8796:</strong> Pull out com_resistor1. Press the Big Button three times. Cut the red wire. Switch off Switch Button 2.</li>
                </ul>
            </div>
        </div>
    );
}

export default ManualScreen;
