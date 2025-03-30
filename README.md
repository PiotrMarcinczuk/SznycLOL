# Aplikacja Next.js z Riot API

To prosta aplikacja Next.js, która łączy się z backendem i używa Riot API do pobierania danych.

## Instalacja

1. Sklonuj repozytorium:

    ```bash
    git clone https://github.com/twoj-uzytkownik/my-next-app.git
    cd my-next-app
    ```

2. Zainstaluj zależności:

    ```bash
    npm install
    ```

3. Stwórz plik `.env` w katalogu głównym z następującą zawartością:

    ```env
    URL="https://twoj-backend-url.com"
    NEXT_PUBLIC_ALLOWED_ORIGINS="https://twoj-frontend-url.com"
    RIOT_API_KEY="twoj-riot-api-key"
    ```

4. Uruchom serwer deweloperski:

    ```bash
    npm run dev
    ```

    Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## Użycie

- Zmienna `URL` zawiera adres backendu używanego przez frontend.
- `RIOT_API_KEY` jest używany do łączenia się z Riot API, aby pobierać dane.
- `NEXT_PUBLIC_ALLOWED_ORIGINS` to URL frontendowy, który ma dostęp do backendu.

## Licencja

Ten projekt jest licencjonowany na zasadach licencji MIT - szczegóły znajdują się w pliku [LICENSE](LICENSE).
