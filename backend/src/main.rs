use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use serde::Serialize;

#[derive(Serialize)]
struct HubResponse {
    slug: String,
    name: String,
    city: String,
    category: String,
    rating: f32,
}

#[get("/api/hubs")]
async fn hubs() -> impl Responder {
    let data = vec![
        HubResponse { slug: "neuwork-berlin".into(), name: "NeuWork Berlin".into(), city: "Berlin".into(), category: "Coworking".into(), rating: 4.8 },
        HubResponse { slug: "skyline-terrace".into(), name: "Skyline Terrace".into(), city: "Dubai".into(), category: "Nightlife".into(), rating: 4.6 },
    ];
    HttpResponse::Ok().json(data)
}

#[get("/api/hub/{slug}")]
async fn hub_detail(path: web::Path<String>) -> impl Responder {
    let slug = path.into_inner();
    let result = HubResponse {
        slug: slug.clone(),
        name: format!("{} hub", slug),
        city: "Global".into(),
        category: "Mixed".into(),
        rating: 4.5,
    };
    HttpResponse::Ok().json(result)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    tracing_subscriber::fmt::init();
    println!("Starting City Compass backend on http://127.0.0.1:8080");

    HttpServer::new(|| {
        App::new()
            .service(hubs)
            .service(hub_detail)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
