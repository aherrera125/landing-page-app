import SendButton from './sendButton';
import './styles.css'

function landingPage() {
    return (
        <div className="container">
            <div id="leftDiv" className="col-md-6 d-flex justify-content-center">
                <h2>Landing Page - Promotion</h2>
            </div>
            <div id="rightDiv" className="col-md-6 justify-content-center">
                <form>
                    <label htmlFor="fname">First Name:</label>
                    <input id="fname" type="text" /><br></br><br></br>

                    <label htmlFor="lname">Last Name:</label>
                    <input id="lname" type="text" /><br></br><br></br>

                    <label>Email:</label>
                    <input id="email" type="text" /><br></br><br></br>

                    <label>Gender:</label>
                    <select id="gender">
                        <option value="Select" selected>Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <br></br><br></br>
                    <label>Message:</label><br></br>
                    <textarea id="message" name="message" rows="10" cols="30"></textarea><br></br><br></br>
                    <SendButton></SendButton>
                </form>
            </div>
        </div>
    );
}

export default landingPage;