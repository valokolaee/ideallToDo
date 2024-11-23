export default (html: string, isRtl: boolean) => (
    `
    <!DOCTYPE html>
        <html>
            <body  ${isRtl ? `  dir="rtl"` : ``}>
                ${html}
            </body>
        </html>
    `
)
