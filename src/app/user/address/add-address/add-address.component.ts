import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit{

  addressForm: FormGroup;
  states:any=null;
  district:any=null;
  id:number | null=null;
  personId='';
  title ='Add New Address';
  location=[
    {
      country:'india',
      state:[
        {stateName:'kerala',
           dist:['Kannur', 'calicut','Malapuram']},
        {stateName:'TamilNadu',
           dist:['chennai','coimbatore']}]
    },
    {
      country:'America',
      state:[
        {stateName:'california',
           dist:['moodadi', 'Meenchatha','Mattannur']}]
    },
    
  ]

constructor(private fb:FormBuilder, private route:ActivatedRoute){}

  ngOnInit(): void {
    
    this.route.params.subscribe((value)=>{
      console.log(typeof(value['id']));
      this.id= +value['id'];
    })
    if( this.id==0 ||this.id) {
      this.personId='athul';
      console.log(this.personId);
      this.title= 'Edit Address'
    }
    this.addressForm= this.fb.group({
      personName :[( this.id==0 ||this.id)?this.personId : null,Validators.required],
      personMobile:[null,Validators.required],
      personAddress:[null,Validators.required],
      personArea:[null,Validators.required],
      personLandmark:[null,Validators.required],
      personCity:[null,Validators.required],
      personPin:[null,Validators.required],
      personCountry:[null,Validators.required],
      personState:[null,Validators.required],
      personDistrict:[null,Validators.required],

      
    })

    this.addressForm.get('personCountry')?.valueChanges.subscribe(value=>{this.onCountryChange(value)})
    this.addressForm.get('personState')?.valueChanges.subscribe(value=>{this.onStateChange(value)})


  }
  onCountryChange(value:any){
    
    
    const [data] = this.location.filter(item=>item.country==value)
    this.states=data;
    console.log(this.states);
    
  }
  onStateChange(value:any){
    
    const [data] =this.states.state.filter((item:any)=>item.stateName==value)
    this.district=data.dist;
    console.log(this.district);
    
  }
  onSubmit(){

  }
}
