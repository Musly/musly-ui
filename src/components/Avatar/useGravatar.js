import querystring from 'query-string';
import isRetina from 'is-retina';
import md5 from 'md5';

const baseUrl = '//www.gravatar.com/avatar/';

export function useGravatar (email, size = 256) {
  const formattedEmail = `${email}`.trim().toLowerCase();
  const hash = md5(formattedEmail);
  const query = querystring.stringify({ s: size, r: 'g', d: 'mp' });
  const retinaQuery = querystring.stringify({ s: size * 2, r: 'g', d: 'mp' });

  return isRetina() ? `${baseUrl}${hash}/?${retinaQuery}` : `${baseUrl}${hash}/?${query}`;
}
