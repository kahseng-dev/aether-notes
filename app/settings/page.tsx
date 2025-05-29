'use client'

import Link from "next/link";
import { ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Settings() {
  const headerTitle = 'Settings';
  const previewTitle = 'Betty White'
  const previewText = "It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can find the humor in our everyday lives. And sometimes it can be a lifesaver."
  const fontOptions = [
    {
      type:'Default',
      fontFamily: 'var(--font-geist-sans)',
    },
    {
      type:'Monospaced',
      fontFamily: 'var(--font-geist-sans)',
    },
    {
      type:'Serif',
      fontFamily: 'var(--font-geist-sans)',
    },
    {
      type:'Rounded',
      fontFamily: 'var(--font-geist-sans)',
    },
  ];
  const themeOptions = ['Dark', 'Light'];

  const [storedTheme, setStoredTheme] = useState('dark');
  const [storedFontOption, setStoredFontOption] = useState('Default');

  useEffect(() => {
    try {
      localStorage.getItem('theme') || localStorage.setItem('theme', 'dark');
      localStorage.getItem('font-option') || localStorage.setItem('font-option', 'Default');
    }

    catch (error) {
      console.error(error);
    }
  }, []);

  function handleThemeChange(event:React.ChangeEvent<HTMLInputElement>) {
    const newTheme = event.target.value.toLowerCase();
    setStoredTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  function handleFontOptionChange(event:React.ChangeEvent<HTMLInputElement>) {
    const newFont = event.target.value;
    setStoredFontOption(newFont);
    localStorage.setItem('font-option', newFont);
  }

  return (
    <div className='p-8 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col'>
        <div className='p-2 flex items-center justify-between'>
          <Link
            href='/'
            className='p-2 gap-4 flex items-center cursor-pointer rounded transition duration-300 ease-in-out hover:bg-white/20'>
            <ChevronLeft className={styles.icon}/>
          </Link>
          <p>{headerTitle}</p>
          <p></p>
        </div>
        <div className='mt-8 flex flex-col gap-8 mb-48'>
          <div>
            <p className='mb-4'>Preview</p>
            <p className="pl-4"><strong>{previewTitle}</strong></p>
            <p className="pl-4">{previewText}</p>
          </div>
          <div className='flex flex-col'>
            <p className='mb-2'>Font Family</p>
            { fontOptions.map(fontOption =>
              <label
                key={fontOption.type}
                className='p-4 flex items-center justify-between border-b border-zinc-800 cursor-pointer transition duration-300 ease-in-out hover:bg-white/20'>
                  <p>{fontOption.type}</p>
                  <input
                    onChange={handleFontOptionChange}
                    checked={storedFontOption === fontOption.type}
                    className={`${styles.icon} font-[family-name:${fontOption.fontFamily}] cursor-pointer`}
                    type='radio'
                    name='font-family'
                    value={fontOption.type}/>
              </label>
            )}
          </div>
          <div className='flex flex-col'>
            <p className='mb-2'>Dark Mode</p>
            { themeOptions.map(themeOption =>
              <label
                key={themeOption}
                className='p-4 flex items-center justify-between border-b border-zinc-800 cursor-pointer transition duration-300 ease-in-out hover:bg-white/20'>
                  <p>{themeOption}</p>
                  <input
                    onChange={handleThemeChange}
                    checked={storedTheme === themeOption.toLowerCase()}
                    className={`${styles.icon} cursor-pointer`}
                    type='radio'
                    value={themeOption}/>
              </label>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  icon: 'size-5 min-w-max',
};