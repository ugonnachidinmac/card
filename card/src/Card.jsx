import picture from './assets/pic.png'

function Card(){

    return(
        <>
        <div className="card">
            <img className="card-image" src={picture} alt="my profile picture" />
            <h2 className='profile-name'>Name: Ugonna Chidinma C.</h2>
            <div className='text'>First time building card in react, so exciting...</div>
        </div>
        </>
    );
}

export default Card