


interface FromDataInterface {
  type : string,
  placeholder : string,
  value : string,
  onChange: (x: string) => any
}

const FormInput: React.FC<FromDataInterface>= ({
  type ,
  placeholder ,
  value ,
  onChange,
}) => {

   return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
    </div>
  );
}

export default FormInput