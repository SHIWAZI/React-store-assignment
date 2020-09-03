import React from 'react'


        var CreateStoreForm= React.createClass({
        getInitialState: function(){
                return({
                    stores: []
                });
            },
            render: function(){
                var stores = this.state.stores;
                stores = stores.map(function(store, index){
                    return(
                        <li key={index}>
                            <span className={store.obj.available}></span>
                            <span className="name">{store.obj.name}</span>
                            <span className="img">{store.obj.img}</span>
                            <span className="dist">{Math.floor(store.dis / 1000)} km</span>
                        </li>
                    );
                });
             return(
                    <div id="store-container">
                        <form id="search" onSubmit={this.handleSubmit}>
                            <label>upload your image</label>
                            <input type="text" ref="img" placeholder="img" required />
                            <label>Enter your Latitude:</label>
                            <input type="text" ref="lat" placeholder="latitude" required />
                            <label>Enter your Longitude:</label>
                            <input type="text" ref="lng" placeholder="longitude" required />
                            <input type="submit" value="Find store" />
                        </form>
                        <ul>{stores}</ul>
                    </div>
                );
            },
              handleSubmit: function(e){
                e.preventDefault();
                  var lng = this.refs.lng.value;
                var lat = this.refs.lat.value
                
                   fetch('/api/stores?lng=' + lng + '&lat=' + lat).then(function(data){
                  return data.json();
                }).then( json => {
                    this.setState({
                        stores: json
                    });
                    console.log(json);
                });
            }
        });
   export default CreateStoreForm;
        
