(function() {var implementors = {};
implementors['log'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='log/enum.LogLevel.html' title='log::LogLevel'>LogLevel</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='log/enum.LogLevelFilter.html' title='log::LogLevelFilter'>LogLevelFilter</a>","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt;",];implementors['time'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.Duration.html' title='time::Duration'>Duration</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.Timespec.html' title='time::Timespec'>Timespec</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.SteadyTime.html' title='time::SteadyTime'>SteadyTime</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.Tm.html' title='time::Tm'>Tm</a>",];implementors['rusqlite'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='rusqlite/struct.SqliteOpenFlags.html' title='rusqlite::SqliteOpenFlags'>SqliteOpenFlags</a>",];implementors['cbor'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='cbor/enum.CborUnsigned.html' title='cbor::CborUnsigned'>CborUnsigned</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='cbor/enum.CborSigned.html' title='cbor::CborSigned'>CborSigned</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='cbor/struct.CborBytes.html' title='cbor::CborBytes'>CborBytes</a>",];implementors['routing'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='routing/types/struct.DhtId.html' title='routing::types::DhtId'>DhtId</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='routing/types/enum.Authority.html' title='routing::types::Authority'>Authority</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='routing/types/struct.NameAndTypeId.html' title='routing::types::NameAndTypeId'>NameAndTypeId</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='routing/types/struct.Signature.html' title='routing::types::Signature'>Signature</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='routing/types/struct.PublicSignKey.html' title='routing::types::PublicSignKey'>PublicSignKey</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='routing/types/struct.PublicKey.html' title='routing::types::PublicKey'>PublicKey</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='routing/types/struct.PublicPmid.html' title='routing::types::PublicPmid'>PublicPmid</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='routing/types/struct.AccountTransferInfo.html' title='routing::types::AccountTransferInfo'>AccountTransferInfo</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='routing/types/struct.SourceAddress.html' title='routing::types::SourceAddress'>SourceAddress</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='routing/types/struct.DestinationAddress.html' title='routing::types::DestinationAddress'>DestinationAddress</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='routing/types/enum.MessageTypeTag.html' title='routing::types::MessageTypeTag'>MessageTypeTag</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
