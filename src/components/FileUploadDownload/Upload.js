import React, { Component } from 'react'
import axios from 'axios'; 

export default class Upload extends Component {

    state = {           
        selectedFile: null,
        selectedFile2: null
      };        
     
      onFileChange = event => {    
        this.setState({ selectedFile: event.target.files[0] });        
      }; 

      onFileChange2 = event => {    
        this.setState({ selectedFile2: event.target.files[0] });        
      }; 

      onFileUpload = () => {    
        const formData = new FormData(); 
        formData.append( 
          "myFile", 
          this.state.selectedFile, 
          this.state.selectedFile.name 
        );        
       
        formData.append( 
            "myFile2", 
            this.state.selectedFile2, 
            this.state.selectedFile2.name 
          );        

         formData.append("Age", 30);  //Other data

        console.log(this.state.selectedFile);        
        
        axios.post("https://localhost:44398/api/Incidents/UploadFile", formData); 
      }; 

      DownloadFile = () => {
       // axios.get("");
        window.open("https://localhost:44398/api/Incidents/DownloadFile?uniqueName=2370c3eb-3bb0-46a0-96ba-1d359361d232"); 
      }

      fileData = () => { 
     
        if (this.state.selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              <p>File Type: {this.state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>Choose before Pressing the Upload button</h4> 
            </div> 
          ); 
        } 
      }; 

    render() {
        return (
            <div>
                <input type="file"  onChange={this.onFileChange}/>
                <input type="file"  onChange={this.onFileChange2}/>
                <button onClick={this.onFileUpload}>Upload</button>
                
                {this.fileData()} 

                <button onClick={this.DownloadFile}>Download</button>

                <img className="responsive-img" src="https://localhost:44398/api/Incidents/DownloadFile?uniqueName=2370c3eb-3bb0-46a0-96ba-1d359361d232" alt="Not found" />
            </div>
        )
    }
}
