import { Download } from 'lucide-react';

export function Downloads({ files }) {
    return files.map((f, i) => {
        return (
            <div key={i} className='p-4'>
                <a
                    href={`/api/download/${f.file}`}
                    download
                    className='group items-center h-fit'
                >
                    <div className='flex items-center group-hover:bg-blue-50 rounded-md text-blue-600 group-hover:text-blue-800 transition-colors'>
                        <span className='bg-blue-100 group-hover:bg-blue-300 mr-3 px-2 py-1 rounded min-w-fit font-medium text-blue-800 text-xs transition-colors'>
                            <Download className='w-5 h-5 text-gray-500 group-hover:text-white' />
                        </span>
                        {f.name}
                    </div>
                </a>
            </div>
        );
    });
}
