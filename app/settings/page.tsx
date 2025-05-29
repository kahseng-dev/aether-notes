import Link from "next/link";
import { ChevronLeft, Circle } from 'lucide-react';

export default function Settings() {
  const headerTitle = 'Settings';
  const previewTitle = 'Betty White'
  const previewText = "It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can find the humor in our everyday lives. And sometimes it can be a lifesaver."
  const fontTypes = [
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
            <p><strong>{previewTitle}</strong></p>
            <p>{previewText}</p>
          </div>
          <div className='flex flex-col'>
            <p className='mb-2'>Font Family</p>
            { fontTypes.map(fontOption =>
              <label
                key={fontOption.type}
                className='p-4 flex items-center justify-between border-b border-zinc-800 cursor-pointer transition duration-300 ease-in-out hover:bg-white/20'>
                  <p>{fontOption.type}</p>
                  <input
                    className={`${styles.icon} font-[family-name:${fontOption.fontFamily}] cursor-pointer`}
                    type='radio'
                    name='font-family'
                    value={fontOption.type}/>
              </label>
            )}
          </div>
          <div className='flex flex-col'>
            <p className='mb-2'>Dark Mode</p>
            { ['Dark', 'Light'].map(themeOption =>
              <label
                key={themeOption}
                className='p-4 flex items-center justify-between border-b border-zinc-800 cursor-pointer transition duration-300 ease-in-out hover:bg-white/20'>
                  <p>{themeOption}</p>
                  <input
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