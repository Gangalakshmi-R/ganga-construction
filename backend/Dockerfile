
# ==================================
# BUILD STAGE
# ==================================
FROM maven:3.9.9-eclipse-temurin-21 AS build

WORKDIR /app

# Copy Maven configuration first
COPY pom.xml .

# Download dependencies
RUN mvn -B -ntp \
    -Dmaven.wagon.http.retryHandler.count=5 \
    dependency:go-offline

# Copy application source
COPY src ./src

# Build Spring Boot application
RUN mvn -B -ntp \
    -Dmaven.wagon.http.retryHandler.count=5 \
    clean package -DskipTests


# ==================================
# RUNTIME STAGE
# ==================================
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
