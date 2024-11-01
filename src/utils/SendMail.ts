
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

      console.log(res);
      // return data      
    } catch(error) {
      console.log('ent');
      console.log(error);
      return false
    }
  };


export default sendMail


