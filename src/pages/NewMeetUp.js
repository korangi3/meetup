import { useHistory } from 'react-router-dom';

import NewMeetUpForm from "../components/meetups/NewMeetUpForm";


function NewMeetUpPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch('https://react-getting-started-d13b6-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      header: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history.replace('/');
    });

  }

    return (
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
      </section>
    );
}

export default NewMeetUpPage;