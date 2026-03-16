#![no_std]

use soroban_sdk::{contractimpl, symbol, vec, Address, Env, Map, Symbol, Vec};

#[derive(Clone)]
pub struct Hub {
    pub slug: Symbol,
    pub name: Symbol,
    pub city: Symbol,
    pub category: Symbol,
    pub rating: u32,
}

pub struct CityCompassContract;

#[contractimpl]
impl CityCompassContract {
    pub fn add_hub(env: Env, slug: Symbol, name: Symbol, city: Symbol, category: Symbol, rating: u32) {
        let key = symbol!("hub:").to_string(&env).to_string() + &slug.to_string(&env);
        env.storage().set(&key, &Hub { slug: slug.clone(), name, city, category, rating });

        let mut hub_list: Vec<Symbol> = env.storage().get(&symbol!("hub_list")).unwrap_or(Vec::new(&env));
        hub_list.push_back(slug);
        env.storage().set(&symbol!("hub_list"), &hub_list);
    }

    pub fn get_hub(env: Env, slug: Symbol) -> Option<Hub> {
        let key = symbol!("hub:").to_string(&env).to_string() + &slug.to_string(&env);
        env.storage().get(&key)
    }

    pub fn list_hubs(env: Env) -> Vec<Hub> {
        let hub_list: Vec<Symbol> = env.storage().get(&symbol!("hub_list")).unwrap_or(Vec::new(&env));
        let mut results = Vec::new(&env);
        for i in 0..hub_list.len() {
            let slug = hub_list.get(i).unwrap();
            let key = symbol!("hub:").to_string(&env).to_string() + &slug.to_string(&env);
            if let Some(hub) = env.storage().get(&key) {
                results.push_back(hub);
            }
        }
        results
    }
}

mod test {
    use soroban_sdk::{Env, Symbol};
    use super::CityCompassContract;

    #[test]
    fn test_add_and_get() {
        let env = Env::default();
        let contract_id = env.register_contract(None, CityCompassContract);
        let client = super::CityCompassContractClient::new(&env, &contract_id);
        client.add_hub(Symbol::new(&env, "neuwork-berlin"), Symbol::new(&env, "NeuWork Berlin"), Symbol::new(&env, "Berlin"), Symbol::new(&env, "Coworking"), 5);
        let hub = client.get_hub(Symbol::new(&env, "neuwork-berlin")).unwrap();
        assert_eq!(hub.name.to_string(&env), "NeuWork Berlin");
    }
}
