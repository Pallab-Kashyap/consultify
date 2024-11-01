
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// console.log(supabaseUrl, '  ', supabaseKey);

// export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabase = createClient( supabaseUrl, supabaseKey);

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}


  const sendMail = async (contact: ContactData) => {
    try {
      let res = await supabase
      .from('contacts')  
      .insert([contact]);

      if(res.data) return true
      else if(res.error) return false
      return true
      // return data      
    } catch {
      return false
    }
  };


export default sendMail


