const get99NamesOfAllah = async (number) => {
  try {
    const response = await fetch(`http://api.aladhan.com/v1/asmaAlHusna/${number}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.code === 200 && data.status === 'OK') {
      const name = data.data[0]; 
      console.log(name.transliteration);
      return {
        transliteration: name.transliteration,
        meaning: name.en.meaning
      };
    } else {
      throw new Error('Invalid response from the API');
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

export default get99NamesOfAllah;  

