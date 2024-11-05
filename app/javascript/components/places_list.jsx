import React, {useState, useEffect} from 'react';

import ReactDOM from 'react-dom/client';

function PlacesList(props) {
	//state as : a minimum set of params that fully rep what to render on screen
	const [loading, setLoading] = useState(true);
	const [loadedPlaces, setLoadedPlaces] = useState([]);

	useEffect(() =>{
		//hit the server and get places list
		const apiEndpoint = "/api/places"
		fetch(apiEndpoint)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			setLoadedPlaces(data["places"])
			setLoading(false)
		});
	},[])

	const loadingSection = (<div>Loading ..</div>)
	console.log(loadedPlaces);
	const dataSection = loadedPlaces.map((place, index) => {
    return (
        <div key={index}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Recent Upload Speed</th>
                        <th>Recent Upload Speed Units</th>
                        <th>Recent Number of Measurements</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{place.name}</td>
                        <td>{place.city}</td>
                        <td>{place.most_recent_download_speed}</td>
                        <td>{place.most_recent_download_units}</td>
                        <td>{place.number_of_measurements}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
});
	if (loading){
		return ( loadingSection    
    )
	} else {
		return (dataSection)
			
	}

}



const placesList = ReactDOM.createRoot(document.getElementById('places-list-container'));
placesList.render(<PlacesList/>);