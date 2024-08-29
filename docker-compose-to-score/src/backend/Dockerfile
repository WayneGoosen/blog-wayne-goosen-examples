# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY . ./
RUN dotnet restore Example.Api.sln
RUN dotnet publish ./src/Web/Web.csproj -c release -o /app --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app ./

EXPOSE 8002
USER $APP_UID
ENTRYPOINT ["dotnet", "eExample.Api.Web.dll"]