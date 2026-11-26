
FROM maven:3.9.9-eclipse-temurin-21 AS build

WORKDIR /app

# Copy Maven configuration and dependencies
COPY settings.xml /root/.m2/settings.xml
COPY pom.xml .

# Download dependencies through the mirror
RUN mvn -B -ntp -s /root/.m2/settings.xml dependency:go-offline

# Copy application source
COPY src ./src

# Build the application
RUN mvn -B -ntp -s /root/.m2/settings.xml clean package -DskipTests

# Runtime image
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
