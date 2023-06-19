import { ContactForm } from '@/shared/interface/contactForm.interface'
import { Color } from '@/shared/interface/color.interface'

export default function emailTemplate(contactEmail: ContactForm): string {
	const date = new Date().getFullYear()
	const backgroundColorHeader: Color = '#181817'
	const textColorHeader: Color = '#ffffff'
	const backgroundColorFooter: Color = '#40403f'
	const textColorFooter: Color = '#ffffff'
	return `
  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
          <tr>
            <td align="center" style="padding:40px 0 30px 0;background:${backgroundColorHeader};">
              <h1 style="color:${textColorHeader};">Web Dementia Motion Contact</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 30px 42px 30px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                <tr>
                  <td style="padding:0 0 36px 0;color:#153643;">
                    <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">${contactEmail.subject}</h1>
                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">${contactEmail.message}</p>
                    <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">${contactEmail.email}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;background:${backgroundColorFooter};">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                <tr>
                  <td style="padding:0;width:50%;" align="left">
                    <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:${textColorFooter};">
                      &reg; pPlanelloDev, ${date}<br/>
                    </p>
                  </td>
                  <td style="padding:0;width:50%;" align="right">
                    <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                      <tr>
                        <td style="padding:0 0 0 10px;width:250px;">
                          <a href="https://github.com/pplanello" style="color:#ffffff;">
                            <img src='https://ibb.co/X8x5Xbr' alt="GitHub" width="250px" style="height:auto;display:block;border:0;"/>
                          </a>
                        </td>
                        <td style="padding:0 0 0 10px;width:38px;">
                          <a href="https://www.linkedin.com/in/pablo-planell%C3%B3-san-segundo-upm" style="color:#ffffff;">
                            <img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  `
}
