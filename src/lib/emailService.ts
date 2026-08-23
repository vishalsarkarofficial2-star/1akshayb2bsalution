import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_innvjkg',
  TEMPLATE_ID: 'template_25f8viu',
  PUBLIC_KEY: 'sRCybmmwCFUtFcEZi'
};

export interface EmailSubmissionData {
  sourceForm?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  state?: string;
  businessType?: string;
  businessActivity?: string;
  servicesRequired?: string[] | string;
  selectedPackage?: string;
  panNumber?: string;
  notes?: string;
  date?: string;
  timeSlot?: string;
  topic?: string;
  submissionRef?: string;
}

/**
 * Sends form submission data to the user's email via EmailJS.
 */
export async function sendLeadEmail(data: EmailSubmissionData): Promise<{ success: boolean; error?: any }> {
  try {
    const formattedServices = Array.isArray(data.servicesRequired)
      ? data.servicesRequired.join(', ')
      : (data.servicesRequired || data.selectedPackage || 'Not specified');

    const formattedMessage = [
      `--- NEW LEAD INQUIRY: ${data.sourceForm || 'Website Inquiry'} ---`,
      `Full Name: ${data.fullName || 'N/A'}`,
      `Mobile / Phone: ${data.phone || 'N/A'}`,
      `Email Address: ${data.email || 'N/A'}`,
      data.state ? `State / UT: ${data.state}` : null,
      data.businessType ? `Business Type: ${data.businessType}` : null,
      data.businessActivity ? `Business Activity: ${data.businessActivity}` : null,
      formattedServices ? `Selected Service(s) / Package: ${formattedServices}` : null,
      data.panNumber ? `PAN Number: ${data.panNumber}` : null,
      data.date ? `Preferred Date: ${data.date}` : null,
      data.timeSlot ? `Preferred Time Slot: ${data.timeSlot}` : null,
      data.topic ? `Consultation Topic: ${data.topic}` : null,
      data.submissionRef ? `Reference ID: ${data.submissionRef}` : null,
      data.notes ? `Additional Notes: ${data.notes}` : null,
      `Submitted At: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`
    ].filter(Boolean).join('\n');

    const templateParams = {
      // General contact aliases
      name: data.fullName || 'Prospective Client',
      from_name: data.fullName || 'Prospective Client',
      user_name: data.fullName || 'Prospective Client',
      fullName: data.fullName || '',
      
      email: data.email || '',
      from_email: data.email || '',
      user_email: data.email || '',
      reply_to: data.email || '',
      emailAddress: data.email || '',
      
      phone: data.phone || '',
      mobile: data.phone || '',
      mobileNumber: data.phone || '',
      user_phone: data.phone || '',
      
      // Business fields
      state: data.state || '',
      stateName: data.state || '',
      businessType: data.businessType || '',
      businessActivity: data.businessActivity || '',
      services: formattedServices,
      servicesRequired: formattedServices,
      selectedPackage: data.selectedPackage || '',
      panNumber: data.panNumber || '',
      
      // Appointment fields
      date: data.date || '',
      timeSlot: data.timeSlot || '',
      topic: data.topic || '',
      
      // Reference & meta
      submissionRef: data.submissionRef || '',
      sourceForm: data.sourceForm || 'Lead Form',
      
      // Main structured message content
      message: formattedMessage,
      notes: data.notes || '',
      subject: `New Lead: ${data.fullName || 'Inquiry'} - ${data.sourceForm || 'Vakilsearch Portal'}`
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('EmailJS dispatch success:', response.status, response.text);
    return { success: true };
  } catch (err) {
    console.error('EmailJS dispatch failed:', err);
    return { success: false, error: err };
  }
}
