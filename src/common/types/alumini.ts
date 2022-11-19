export type BasicInformation = {  
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    mobileCountryCode: number;
    mobile: number;
    class12CompletionYear: number;
    gapAfter12: string;
    presentStatusCode: string;
    residingCountryCode: string;
    residingCityCode:String;
    headline: string;
};

export type AdditionalInformation = {  
    addressLine1: string;
    addressLine2: String;
    locality: String;
    pin:string;
    year12Cirriculum: string;
}

export type EducationalBackground = {
    UGProgramTypeCode: string;
    collegeCode: string;
    fieldOfStudyCode: string;
    startDateYear: number;
    startDateMonth: number;
    completionDateYear: number;
    completionDateMonth: number;
    receiveScholorship: string;
    gradingSystemCode: string;
    grade: string;
    appearForEntranceExam: string;
}