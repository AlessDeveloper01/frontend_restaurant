interface DownloadFileProps {
    data: any;
    filename: string;
    mime: any;
    bom: any;
}
declare const downloadFile: ({ data, filename, mime, bom }: DownloadFileProps) => void;
export { downloadFile };
