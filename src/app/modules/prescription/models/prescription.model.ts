export class PrescribableMedicine {
    id: number=0;
    name: string="";              // Name of the PrescribableMedicine (e.g., Paracetamol)
    type: PrescribableMedicineType=PrescribableMedicineType.TABLET;        // Enum (Tablet, Capsule, Syrup, etc.)
    dosage: PrescribableMedicineDosage=new PrescribableMedicineDosage();            // e.g., "500mg", "5ml", "1 tablet"
    frequency: PrescribableMedicineFrequence=new PrescribableMedicineFrequence();         // e.g., "Twice a day"
    duration: number=0;          // e.g., "5 days"
    instructions?: string;     // e.g., "After meals", "Shake well before use"
    manufacturer?: string;     // Optional: Company producing the PrescribableMedicine
    route?: string;            // Oral, Intravenous, Topical, etc.
    notes?: string ;            // Any additional doctor’s note
    isAsNeeded: PrescribableMedicineAsNeeded=PrescribableMedicineAsNeeded.NO_MENTION;
    PrescribableMedicineTiming : PrescribableMedicineTiming=PrescribableMedicineTiming.NO_MENTION;
  }

  export enum PrescribableMedicineAsNeeded{
    ONLY_WHEN_NEEDED ="only when needed",
    DEFINITE_DOSAGE_SHOULD_COMPLETE = "definite dosage should complete",
    NO_MENTION="no mention"// any time no need mention 
  }
  
  export enum PrescribableMedicineTiming {
    BEFORE_MEAL = "Before Meal",
    AFTER_MEAL = "After Meal",
    MORNING = "Morning",
    EVENING = "Evening",
    NIGHT = "Night",
    NO_MENTION = "no mention"// any time no need mention 
  }
 export class PrescribableMedicineDosage{
    value :number =0;
    unit : PrescribableMedicineDosageUnit =PrescribableMedicineDosageUnit.MG;
  }

  export class PrescribableMedicineFrequence{
    intervalValue : number =0;
    intervalUnit: PrescribableMedicineFrequencyUnit=PrescribableMedicineFrequencyUnit.DAY;
  }

  export enum PrescribableMedicineFrequencyUnit{
    DAY ="day",
    WEEK ="week",
    MONTH ="month"
  }

  export enum PrescribableMedicineDosageUnit{
    MG ="mg",
    G ="g",
    SPOON ="spoon"
  }

  export enum PrescribableMedicineType {
    TABLET = 'Tablet',
    CAPSULE = 'Capsule',
    SYRUP = 'Syrup',
    OINTMENT = 'Ointment',
    INJECTION = 'Injection',
    DROPS = 'Drops',
    INHALER = 'Inhaler',
    SUPPOSITORY = 'Suppository',
    PATCH = 'Patch',
    GEL = 'Gel',
    POWDER = 'Powder',
    SPRAY = 'Spray',
    LOTION = 'Lotion',
    OTHER = 'Other'
  }
  