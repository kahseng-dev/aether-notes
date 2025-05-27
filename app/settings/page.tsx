import Link from "next/link";
import { ChevronLeft, Circle } from 'lucide-react';

export default function Settings() {
  const headerTitle = 'Settings';
  const fontTypes = ['Default', 'Monospaced', 'Serif', 'Rounded'];
  const previewTitle = 'Betty White'
  const previewText = "It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can find the humor in our everyday lives. And sometimes it can be a lifesaver."

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
        <div className='mt-8 flex flex-col gap-8'>
          <div>
            <p><strong>{previewTitle}</strong></p>
            <p>{previewText}</p>
          </div>
          <div className='flex flex-col'>
            {
                fontTypes.map(fontOption =>
                    <div
                      key={fontOption}
                      className='p-4 flex items-center justify-between border-b border-zinc-800 cursor-pointer transition duration-300 ease-in-out hover:bg-white/20'>
                        <p>{fontOption}</p>
                        <Circle className={styles.icon}/>
                    </div>
                )
            }
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  icon: 'size-5 min-w-max',
};