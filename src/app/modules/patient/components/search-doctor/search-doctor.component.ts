import { Component } from '@angular/core';

@Component({
  selector: 'app-search-doctor',
  standalone: false,
  templateUrl: './search-doctor.component.html',
  styleUrl: './search-doctor.component.scss'
})
export class SearchDoctorComponent {
  searchCriteria = {
    name: '',
    specialty: '',
    hospital: '',
    location: ''
  };

  doctors = [
    // Sample data, replace with your API response or data from a service
    { name: 'Dr. John Doe', specialty: 'Cardiologist', hospital: 'City Hospital', location: 'New York' },
    { name: 'Dr. Jane Smith', specialty: 'Dermatologist', hospital: 'HealthCare Clinic', location: 'Los Angeles' },
    { name: 'Dr. Mark Johnson', specialty: 'Neurologist', hospital: 'St. Mary Hospital', location: 'Chicago' },
  ];

  onSearch() {
    // Filter the doctors based on the search criteria
    this.doctors = this.doctors.filter(doctor => {
      return (
        (this.searchCriteria.name ? doctor.name.toLowerCase().includes(this.searchCriteria.name.toLowerCase()) : true) &&
        (this.searchCriteria.specialty ? doctor.specialty.toLowerCase().includes(this.searchCriteria.specialty.toLowerCase()) : true) &&
        (this.searchCriteria.hospital ? doctor.hospital.toLowerCase().includes(this.searchCriteria.hospital.toLowerCase()) : true) &&
        (this.searchCriteria.location ? doctor.location.toLowerCase().includes(this.searchCriteria.location.toLowerCase()) : true)
      );
    });
  }
  
}
